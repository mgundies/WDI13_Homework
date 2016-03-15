def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(m) - mortgage calculator"
  puts "(x) - body mass index"
  puts "(t) - trip calculator"
  puts "(q) - quit"
end

def get_user_selection(message)
  print message
  gets.chomp
end


def trip
  op_D = 0
  op_mpg = 0
  op_ppg = 0
  op_s = 0
  trip_cost = 0
  trip_time = 0
  print "Enter trip distance in miles: "
  op_D = gets.to_f
  print "Enter fuel consuption in miles/gallon: "
  op_mpg = gets.to_f
  print "Enter cost per gallon of fuel: "
  op_ppg = gets.to_f
  print "Enter average travelling speed in miles/hour: "
  op_s = gets.to_f

  puts "Trip Cost: " + ((op_D / op_mpg) * op_ppg).to_s
  puts "Trip Time in hours: " + (op_D / op_s).to_s

end


def bmi
  operand_W = 0
  operand_H = 1
  print "Enter height in m: "
  operand_H = gets.to_f
  print "Enter weight in kg: "
  operand_W = gets.to_f
  puts "BMI = " + (operand_W / (operand_H**2)).to_s
end

def mort
  puts "Enter r "
  rA = gets.to_f
  r = rA * 0.01 / 12

  puts "Enter years "
  yp = gets.to_i
  n = yp *  12

  puts "Principal "
  prin = gets.to_f

  pymt = (r*prin*((1+r)**n))/( ((1+r)**n) -1 )
  puts pymt.round(2)


end

def basic_calculator

  print "Enter a number: "
  operand_A = gets.to_f
  puts "(a) - add"
  puts "(s) - substract"
  puts "(m) - multiply"
  puts "(d) - divide"
  puts "(o) - operate on last number evaluated"
  puts "(q) - quit"
  # until op_choice == 'q'
  op_choice = gets.chomp.downcase

  case op_choice
  when 'a'
    operator = "a"
    txt = "Enter a number to add to "
  when 's'
    operator = "s"
    txt = "Enter a number to subtract from "
  when 'm'
    operator = "m"
    txt = "Enter a number by which to multipy "
  when 'd'
    operator = "d"
    txt = "Enter a number by which to divide "
  when 'o'
    operator = "d"
    txt = "Enter a number by which to divide "
  else
    puts "Invalid selection"
  end

  puts txt + operand_A.to_s
  operand_B = gets.to_f
  case operator
  when 'a'
    puts (operand_A+operand_B).to_s
  when 's'
    puts (operand_A-operand_B).to_s
  when 'm'
    puts (operand_A*operand_B).to_s
  when 'd'
    puts (operand_A/operand_B).to_s
  when 'o'
    puts (operand_A/operand_B).to_s

  end
end

def advanced_calculator

    print "Enter a number: "
    operand_A = gets.to_f
    puts "(s) - square root"
    puts "(x) - exponents"
    puts "(l) - natural log"
    puts "(e) - e"
    puts "(q) - quit"
    # until op_choice == 'q'
    op_choice = gets.chomp.downcase

    case op_choice
    when 's'
      txt = "square root of "
      operator = "s"
    when 'x'
      operator = "x"
      txt = "Enter a power to raise the operand to "
    when 'l'
      txt = "natural log of "
      operator = "l"
    when 'e'
      txt = "exp of "
      operator = "e"
    else
      puts "Invalid selection"
    end

    puts txt + operand_A.to_s

    case operator
    when 's'
      puts (operand_A**0.5).to_s
    when 'x'
      operand_B = gets.to_f
      puts (operand_A**operand_B).to_s
    when 'l'
      puts (Math.log(operand_A)).to_s
    when 'e'
      puts (Math.exp(operand_A)).to_s
    end
end




menu_choice = ""
until menu_choice == 'q'
  case menu_choice
  when 'b'
    basic_calculator
  when 'a'
    advanced_calculator
  when 'm'
    mort
  when 'x'
    bmi
  when 't'
    trip
  else
    puts "Invalid selection"
  end
  main_menu
  print "Please enter your selection: "
  menu_choice = gets.chomp.downcase
end
