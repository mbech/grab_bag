def chop ( target_int, int_array )  
  left_index = 0
  right_index = int_array.length - 1
  mid_index = int_array.length / 2

  until (right_index - left_index) <= 1 do
    if target_int <  int_array[mid_index]
      right_index = mid_index
    else
      left_index = mid_index
    end
    mid_index = left_index + (right_index - left_index)/2
    return mid_index if int_array[mid_index] == target_int
  end

  if int_array[left_index] == target_int 
    left_index 
  elsif int_array[right_index] == target_int 
    right_index
  else
    -1
  end
end

