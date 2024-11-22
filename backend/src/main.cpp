#include <iostream>
#include "course.h"
#include "routes/mainRoutes.h"

int main() {
    std::cout << "Hello, CMake!" << std::endl;
    Course myCourse("CS200", 42182, 4, "Al-Ani");
    myCourse.createAssignment("Exam 1", 10, 100, "Introduction to C++");
    myCourse.createAssignment("Assignment 2", 20, 90, "Loops and Functions");
    myCourse.print();
    double maxGrade = myCourse.getMaxGrade();
    std::cout << "Max Grade: " << maxGrade << std::endl;

    // Learn crow
    crow::SimpleApp app;  // Define the Crow application

    MainRoutes mainRoutes;  // Define the main routes
    mainRoutes.addRoutes(app);  // Add the routes to the app

    // Start the server on port 18080
    app.port(18080).multithreaded().run();

    return 0;
}