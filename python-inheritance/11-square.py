#!/usr/bin/python3

"""Rectangle class"""
Rectangle = __import__('9-rectangle').Rectangle


"""Square class"""


class Square(Rectangle):
    """Represents a square that inherits from Rectangle"""
    def __init__(self, size):
        """
        Initializes a Square class
        validating size value
        """
        self.integer_validator("size", size)
        self.__size = size
        super().__init__(self.__size, self.__size)

    def area(self):
        """Computes the area of a Square."""
        return super().area()

    def __str__(self):
        """Return a string representation of the instance"""
        return f"[Square] {self.__size}/{self.__size}"
