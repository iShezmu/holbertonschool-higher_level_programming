# Project : Python - More Classes and Objects

*   0-rectangle.py
    - Write an empty class `Rectangle` that defines a rectangle:
      - You are not allowed to import any module

*   1-rectangle.py
    - Write a class `Rectangle` that defines a rectangle by:
      - Private instance attribute: `width`:
        - property `def width(self):` to retrieve it
        - property setter `def width(self, value):` to set it:
          - `width` must be an integer, otherwise raise a `TypeError` exception with the message `width must be an integer`
          - if `width` is less than `0`, raise a `ValueError` exception with the message `width must be >= 0`
      - Private instance attribute: `height:`
        - property `def height(self):` to retrieve it
        - property setter `def height(self, value):` to set it:
          - `height` must be an integer, otherwise raise a `TypeError` exception with the message `height must be an integer`
          - if `height` is less than `0`, raise a `ValueError` exception with the message `height must be >= 0`
      - Instantiation with optional `width` and `height`: `def __init__(self, width=0, height=0):`
      - You are not allowed to import any module

*   2-rectangle.py
    - Write a class Rectangle that defines a rectangle by:
      - Private instance attribute: `width:`
        - property `def width(self):` to retrieve it
        - property setter `def width(self, value):` to set it:
          - `width` must be an integer, otherwise raise a `TypeError` exception with the message `width must be an integer`
          - if `width` is less than `0`, raise a `ValueError` exception with the message `width must be >= 0`
      - Private instance attribute: `height:`
        - property `def height(self):` to retrieve it
        - property setter `def height(self, value):` to set it:
          - `height` must be an integer, otherwise raise a `TypeError` exception with the message `height must be an integer`
          - if `height` is less than `0`, raise a `ValueError` exception with the message `height must be >= 0`
      - Instantiation with optional `width` and `height`: `def __init__(self, width=0, height=0):`
      - Public instance method: `def area(self):` that returns the rectangle area
      - Public instance method: `def perimeter(self):` that returns the rectangle perimeter:
        - if `width` or `height` is equal to `0`, perimeter is equal to `0`
      - You are not allowed to import any module

*   3-rectangle.py
    - Write a class `Rectangle` that defines a rectangle by:
      - Private instance attribute: `width:`
        - property `def width(self):` to retrieve it
        - property setter `def width(self, value):` to set it:
          - `width` must be an integer, otherwise raise a `TypeError` exception with the message `width must be an integer`
          - if `width` is less than `0`, raise a `ValueError` exception with the message `width must be >= 0`
      - Private instance attribute: `height:`
        - property `def height(self):` to retrieve it
        - property setter `def height(self, value):` to set it:
          - `height` must be an integer, otherwise raise a `TypeError` exception with the message `height must be an integer`
          - if `height` is less than `0`, raise a `ValueError` exception with the message `height must be >= 0`
      - Instantiation with optional `width` and `height`: `def __init__(self, width=0, height=0):`
      - Public instance method: `def area(self):` that returns the rectangle area
      - Public instance method: `def perimeter(self):` that returns the rectangle perimeter:
        - if `width` or `height` is equal to `0`, perimeter has to be equal to `0`
      - `print()` and `str()` should print the rectangle with the character `#`
        - if `width` or `height` is equal to 0, return an empty string
      - You are not allowed to import any module

*   4-rectangle.py
    - Write a class `Rectangle` that defines a rectangle by:
      - Private instance attribute: `width:`
        - property `def width(self):` to retrieve it
        - property setter `def width(self, value):` to set it:
          - `width` must be an integer, otherwise raise a `TypeError` exception with the message `width must be an integer`
          - if `width` is less than `0`, raise a `ValueError` exception with the message `width must be >= 0`
      - Private instance attribute: `height:`
        - property `def height(self):` to retrieve it
        - property setter `def height(self, value):` to set it:
          - `height` must be an integer, otherwise raise a `TypeError` exception with the message `height must be an integer`
          - if `height` is less than `0`, raise a `ValueError` exception with the message `height must be >= 0`
      - Instantiation with optional `width` and `height`: `def __init__(self, width=0, height=0):`
      - Public instance method: `def area(self):` that returns the rectangle area
      - Public instance method: `def perimeter(self):` that returns the rectangle perimeter:
        - if `width` or `height` is equal to `0`, perimeter has to be equal to `0`
      - `print()` and `str()` should print the rectangle with the character `#`
        - if `width` or `height` is equal to 0, return an empty string
      - `repr()` should return a string representation of the rectangle to be able to recreate a new instance by using `eval()`
      - You are not allowed to import any module

*   5-rectangle.py
    - Write a class `Rectangle` that defines a rectangle by:
      - Private instance attribute: `width:`
        - property `def width(self):` to retrieve it
        - property setter `def width(self, value):` to set it:
          - `width` must be an integer, otherwise raise a `TypeError` exception with the message `width must be an integer`
          - if `width` is less than `0`, raise a `ValueError` exception with the message `width must be >= 0`
      - Private instance attribute: `height:`
        - property `def height(self):` to retrieve it
        - property setter `def height(self, value):` to set it:
          - `height` must be an integer, otherwise raise a `TypeError` exception with the message `height must be an integer`
          - if `height` is less than `0`, raise a `ValueError` exception with the message `height must be >= 0`
      - Instantiation with optional `width` and `height`: `def __init__(self, width=0, height=0):`
      - Public instance method: `def area(self):` that returns the rectangle area
      - Public instance method: `def perimeter(self):` that returns the rectangle perimeter:
        - if `width` or `height` is equal to `0`, perimeter has to be equal to `0`
      - `print()` and `str()` should print the rectangle with the character `#`
        - if `width` or `height` is equal to 0, return an empty string
      - `repr()` should return a string representation of the rectangle to be able to recreate a new instance by using `eval()`
      - Print the message `Bye rectangle..`. (`...` being 3 dots not ellipsis) when an instance of `Rectangle` is deleted
      - You are not allowed to import any module

*   6-rectangle.py
    - Write a class `Rectangle` that defines a rectangle by:
      - Private instance attribute: `width:`
        - property `def width(self):` to retrieve it
        - property setter `def width(self, value):` to set it:
          - `width` must be an integer, otherwise raise a `TypeError` exception with the message `width must be an integer`
          - if `width` is less than `0`, raise a `ValueError` exception with the message `width must be >= 0`
      - Private instance attribute: `height:`
        - property `def height(self):` to retrieve it
        - property setter `def height(self, value):` to set it:
          - `height` must be an integer, otherwise raise a `TypeError` exception with the message `height must be an integer`
          - if `height` is less than `0`, raise a `ValueError` exception with the message `height must be >= 0`
      - Public class attribute `number_of_instances`:
        - Initialized to `0`
        - Incremented during each new instance instantiation
        - Decremented during each instance deletion
      - Instantiation with optional `width` and `height`: `def __init__(self, width=0, height=0):`
      - Public instance method: `def area(self):` that returns the rectangle area
      - Public instance method: `def perimeter(self):` that returns the rectangle perimeter:
        - if `width` or `height` is equal to `0`, perimeter has to be equal to `0`
      - `print()` and `str()` should print the rectangle with the character `#`
        - if `width` or `height` is equal to 0, return an empty string
      - `repr()` should return a string representation of the rectangle to be able to recreate a new instance by using `eval()`
      - Print the message `Bye rectangle..`. (`...` being 3 dots not ellipsis) when an instance of `Rectangle` is deleted
      - You are not allowed to import any module
