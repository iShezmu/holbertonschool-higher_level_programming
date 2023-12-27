#!/usr/bin/python3
"""class BaseGeometry"""


class BaseGeometry:
    """Class with public instance methods that raises an exception"""

    def area(self):
        """Raises an Exception with the message"""

        raise Exception('area() is not implemented')

    def integer_validator(self, name, value):
        """Validates value"""

        if type(value) is not int:
            raise TypeError(f"{name} must be an integer")
        elif value <= 0:
            raise ValueError(f"{name} must be greater than 0")
