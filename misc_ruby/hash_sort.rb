# Write a function that sorts the keys in a hash by the length of the key as a string. For instance, the hash:

# { abc: 'hello', 'another_key' => 123, 4567 => 'third' }
# should result in:

# ["abc", "4567", "another_key"]
#
def sortHashKeys( hash )
  hash.keys.sort!
end
