def chop ( target_int, int_array )  
  puts "chopping #{int_array} to find #{target_int}"

  mid_index = int_array.length / 2
  left_index = 0
  right_index = int_array.length - 1

  return -1 if int_array[mid_index].nil? 

  until (right_index - left_index) <= 1 do
    if target_int <  int_array[mid_index]
      right_index = mid_index
    else
      left_index = mid_index
    end
    puts "current left: #{left_index}, mid: #{mid_index}, right: #{right_index}"
    sleep(1)
    mid_index = left_index + (right_index - left_index)/2
    return mid_index if int_array[mid_index] == target_int
  end

  return left_index if int_array[left_index] == target_int 
  return right_index if int_array[right_index] == target_int 
  return -1
end

