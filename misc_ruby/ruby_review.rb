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
