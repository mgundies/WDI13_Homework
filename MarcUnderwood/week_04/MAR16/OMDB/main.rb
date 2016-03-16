require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
  erb :home
end

get "/results" do
  # @search = params[:search]
  # str = ("http://omdbapi.com/?t=" + @search).to_s
  # @result = HTTParty.get str
  # @poster = @result["Poster"]
  # erb :results

  # @search = params[:search]
  # # str = ("http://omdbapi.com/st=" + @search).to_s
  # @result = HTTParty.get("http://omdbapi.com/?t=#{@search}")
  # @poster = @result["Poster"]
  # erb :results

  @search = params[:search]
  # str = ("http://omdbapi.com/st=" + @search).to_s
  @result_array = HTTParty.get("http://omdbapi.com/?s=#{@search}")["Search"]
  @ln = @result_array.length
  @total = HTTParty.get("http://omdbapi.com/?s=#{@search}")
  @num_titles = @total["totalResults"].to_s
  @pages= ((@total["totalResults"].to_f/@ln).ceil).to_i
  @r_title = []
  @r_title << @result_array[0]
  # @r_title.push(@result_array[2])

  for @i in (1 .. @pages)
    @result_array = HTTParty.get("http://omdbapi.com/?s=#{@search}&page=#{@i}")["Search"]
    for @j in (0 .. @ln-1)
      if (!(@result_array[@j] == nil))
        @r_title << @result_array[@j]
      end
    end
  end
  @r_title.shift


  # @x = HTTParty.get("http://omdbapi.com/?s=#{@search}&page=2")["Search"]
  # @result_array.push(@x)

  erb :results



end
