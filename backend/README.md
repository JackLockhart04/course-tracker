### Activating the virtual environment

Windows: run ".\venv\Scripts\activate"
Unix shell (Git bash): run "source venv/Scripts/activate"

### Disable the virtual environment

run "deactivate"

### Run the app

1. Virtual environment must be active
2. run "python localRun.py"
Runs on localhost port 5000 (http://127.0.0.1:5000)

### Run tests

1. Virtual environment must be active
2. run "python -m unittest discover tests"

### Pip'ed requirements
    1. Flask