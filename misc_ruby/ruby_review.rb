#Write code to check a String is palindrome or not?
def is_palindrome?(string)
  if !string.respond_to?(:reverse)
    raise "Invalid Input"
  end
  return string == string.reverse
end

#count char occurences
def char_count(str, char)
  str.downcase.split('').keep_if { |current| current == char }.length
end

def param_yield(num1, num2, &block)
  puts num1
  puts num2
  puts block.call(num1, num2)
end

class Dog
  def initialize(name, age)
    @name = name;
    @age = age;
  end
  def bark
    puts "big bark!"
  end
end

class Puppy < Dog
  def yip
    puts @name << " small bark!"
  end

  def bark
    puts "too small for big bark..."
  end
end
