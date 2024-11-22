cmake_minimum_required(VERSION 3.29)
project(CourseTracker)

set(CMAKE_CXX_STANDARD 17)

# Include the include directory
include_directories(include)

# Set the executable
add_executable(CourseTracker 
  src/main.cpp
  src/course.cpp
  src/assignment.cpp
  src/routes/mainRoutes.cpp
)

# Add the test executable
add_executable(MyProjectTest
  tests/test_assignment.cpp
  src/assignment.cpp
)
# Specify include directories for the test executable
target_include_directories(MyProjectTest PRIVATE include)
# Add a test to CTest
add_test(NAME MyProjectTest COMMAND MyProjectTest)


# Include FetchContent to manage dependencies
include(FetchContent)


# Fetch Asio (which Crow depends on)
FetchContent_Declare(
  asio
  GIT_REPOSITORY https://github.com/chriskohlhoff/asio.git
  GIT_TAG asio-1-32-0  # You can specify a version or commit hash
)
FetchContent_MakeAvailable(asio)
# Manually set ASIO_INCLUDE_DIR after FetchContent
set(ASIO_INCLUDE_DIR ${asio_SOURCE_DIR}/asio)
# Link Winsock for asio
target_link_libraries(CourseTracker PRIVATE ws2_32 mswsock)


# Add Crow
FetchContent_Declare(
  crow
  GIT_REPOSITORY https://github.com/CrowCpp/Crow.git
  GIT_TAG v1.2.0  # You can specify a commit hash or a tag for version control
)
FetchContent_MakeAvailable(crow)

# Include directories for Crow and Asio (header-only libraries)
target_include_directories(CourseTracker PRIVATE 
  ${asio_SOURCE_DIR}/asio/include  # Asio's include directory
  ${crow_SOURCE_DIR}/include  # Crow's include directory
)


# Add GoogleTest
include(FetchContent)
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/refs/tags/v1.15.2.zip
)
# Prevent overriding the parent project's compiler/linker settings on Windows
set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)
FetchContent_MakeAvailable(googletest)
enable_testing()
# Link GoogleTest to the test executable
target_link_libraries(MyProjectTest PRIVATE gtest_main)

