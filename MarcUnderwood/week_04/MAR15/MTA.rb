# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place
require 'pry'

MTA = {
  "N" => {
    :name => "N line",
    :stops => "Times Square,34th,28th,23rd,Union Square,8th".split(','),
    :intersections => ["Union Square"]
    # :intersections => ["UnSquare"]
  },
  "L" => {
    :name => "L line",
    :stops => "8th,6th,Union Square,3rd,1st".split(','),
    :intersections => ["Union Square"]
  },
  "6" => {
    :name => "6 line",
    :stops => "Grand Central,33rd,28th,23rd,Union Square,Astor Place".split(','),
    :intersections => ["Union Square"]
  },
}
# p MTA

def within_line(line, s_station,f_station)
  d = 0
  d = MTA[line][:stops].index(s_station) - MTA[line][:stops].index(f_station)
  if d < 0
    return MTA[line][:stops][MTA[line][:stops].index(s_station), -d+1]
  elsif d > 0
    return MTA[line][:stops][MTA[line][:stops].index(f_station), d+1].reverse
  elsif d == 0
    return "start = finish"
  end
end

def output(stops, s_line, s_station, f_line, f_station)
  if stops == ("start = finish")
    puts "start = finish"
  else
    puts "Suggested Route: FROM " + s_station + " station on " + s_line + " line. TO " + f_station + " station on " + f_line + " line."
    puts "Take the : " + MTA[s_line][:name].to_s + ". Board at " + stops[0]
    puts "Travel through these stations:"
    puts stops[0, stops.length-1]
    puts "Exit on the : " + MTA[f_line][:name].to_s + ", at " + stops[stops.length].to_s + " station."
    puts "Total stops: " + (stops.length - 1).to_s
    puts "======================="
  end
  # puts "Travel throught these stations" + stops.select {|s| print s}
end

def planTrip(s_line, s_station, f_line, f_station)
  if s_line == f_line
    output(within_line(s_line, s_station,f_station),s_line, s_station, f_line, f_station)
  else
    # binding.pry
    if MTA[s_line][:intersections] & MTA[f_line][:intersections]
      set_intersections =  MTA[s_line][:intersections] & MTA[f_line][:intersections]
      p "set I: " + set_intersetions.length 
      # is a direct connection...
      # get path s_line TO connection
      # get path connection TO s_line

    else
      puts "No connection between " + s_line + " line and " + f_line + " line."
    end
  end
end

# planTrip('N', 'Times Square', '6', '33rd')
planTrip('N', 'Times Square', 'N', '23rd')
planTrip('N', '23rd', 'N', 'Times Square')
planTrip('L', '8th', 'N', '23rd')
