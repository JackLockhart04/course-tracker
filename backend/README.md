### Build with CMake
1. F7
or
1. From dir /build
2. run "cmake.."

### Run CMake Build
1. From dir /build
2. run ./CourseTracker

### Build container image
1. From backend root dir
2. run "docker build -t course-tracker-backend ."

### Run container
1. run "docker run <tags> course-tracker-backend"
2. Optional tags
    a. "--name <container-name>" (Name the container)
    b. "-p <port-number>:<port-number>" (Set exposed port, I used 18080)
3. Dont include the "<" and ">" characters