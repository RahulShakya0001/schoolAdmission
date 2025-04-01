
    # Method to scan a boolean (true/false)
    def next_boolean(self):
        while True:
            user_input = input("Enter true or false: ").lower()
            if user_input in ['true', 'false']:
                return user_input == 'true'
            else:
                print("Invalid input! Please enter true or false.")

# Instantiate the scanner
scanner = Scanner()
