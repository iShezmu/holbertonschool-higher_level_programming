# Project: Python - Inheritance

*   0-lookup.py
    - Write a function that returns the list of available attributes and methods of an object:
      - Prototype: `def lookup(obj):`
      - Returns a `list` object
      - You are not allowed to import any module

*   1-my_list.py, tests/1-my_list.txt
    - Write a class `MyList` that inherits from `list`:
      - Public instance method: `def print_sorted(self):` that prints the list, but sorted (ascending sort)
      - You can assume that all the elements of the list will be of type int
      - You are not allowed to import any module

*   2-is_same_class.py
    - Write a function that returns `True` if the object is exactly an instance of the specified class ; otherwise `False`.
      - Prototype: `def is_same_class(obj, a_class):`
      - You are not allowed to import any module

*   3-is_kind_of_class.py
    - Write a function that returns `True` if the object is an instance of, or if the object is an instance of a class that inherited from, the specified class ; otherwise `False`.
      - Prototype: `def is_kind_of_class(obj, a_class):`
      - You are not allowed to import any module

*   4-inherits_from.py
    - Write a function that returns `True` if the object is an instance of a class that inherited (directly or indirectly) from the specified class ; otherwise `False`.
      - Prototype: `def inherits_from(obj, a_class):`
      - You are not allowed to import any module

*   5-base_geometry.py
    - Write an empty class `BaseGeometry`.
      - You are not allowed to import any module

*   6-base_geometry.py
    - Write a class `BaseGeometry`
      - Public instance method: `def area(self):` that raises an `Exception` with the message `area() is not implemented`
      - You are not allowed to import any module

*   7-base_geometry.py, tests/7-base_geometry.txt
    - Write a class `BaseGeometry`
      - Public instance method: `def area(self):` that raises an `Exception` with the message `area() is not implemented`
      - Public instance method: `def integer_validator(self, name, value):` that validates `value`:
        - you can assume `name` is always a string
        - if `value` is not an integer: raise a `TypeError` exception, with the message `<name> must be an integer`
        - if `value` is less or equal to 0: raise a `ValueError` exception with the message `<name> must be greater than 0`
      - You are not allowed to import any module

*   8-rectangle.py
    - Write a class `Rectangle` that inherits from `BaseGeometry`
      - Instantiation with `width` and `height`: `def __init__(self, width, height):
      - `width` and `height` must be private. No getter or setter
- width and height must be positive integers, validated by integer_validator
