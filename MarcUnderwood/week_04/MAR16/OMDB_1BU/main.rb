require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
  erb :home
end

get "/results" do



  @search = params[:search]
  @total = HTTParty.get("http://omdbapi.com/?s=#{@search}")
  # binding.pry
  # p @total["Error"]
  # if @total["Error"] == "Movie not Found!"
  #   binding.pry
  #   @num_titles = "Movie not Found!"
  #   erb:results
  # else
  # binding.pry
    @num_titles = @total["totalResults"].to_s

    @result_array = HTTParty.get("http://omdbapi.com/?s=#{@search}")["Search"]
    @ln = @result_array.length

    @pages= ((@total["totalResults"].to_f/@ln).ceil).to_i
    @r_title = []
    @r_title << @result_array[0]

    for @i in (1 .. @pages)
      @result_array = HTTParty.get("http://omdbapi.com/?s=#{@search}&page=#{@i}")["Search"]
      for @j in (0 .. @ln-1)
        if (!(@result_array[@j] == nil))
          @r_title << @result_array[@j]
        end
      end
    end
  @r_title.shift
  erb :results
  # end
end
