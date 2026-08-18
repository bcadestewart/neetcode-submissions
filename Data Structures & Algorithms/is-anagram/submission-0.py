class Solution:
    # s -> first word
    # t -> second word
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        # letter_counts is the hash map (dicts in Python are hash maps)
        # key = letter, value = number of times it appears
        letter_counts = {}

        # count every letter in s
        for letter in s:
            current_count = letter_counts.get(letter, 0)
            letter_counts[letter] = current_count + 1

        # spend the counts using t
        for letter in t:
            if letter not in letter_counts or letter_counts[letter] == 0:
                return False
            letter_counts[letter] -= 1  # spend one

        return True