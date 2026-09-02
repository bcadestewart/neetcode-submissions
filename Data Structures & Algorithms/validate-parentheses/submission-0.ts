class Solution {
  isValid(s: string): boolean {
    const stack: string[] = [];

    for (const char of s) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        const top = stack.pop();

        if (char === ")" && top !== "(") return false;
        if (char === "]" && top !== "[") return false;
        if (char === "}" && top !== "{") return false;
      }
    }

    return stack.length === 0;
  }
}