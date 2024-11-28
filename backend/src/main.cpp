#include <iostream>
#include "course.h"
#include "routes/mainRoutes.h"

int main() {
    std::cout << "It ran. You're a genius" << std::endl;

    // Learn crow
    crow::SimpleApp app;  // Define the Crow application

    MainRoutes mainRoutes;  // Define the main routes
    mainRoutes.addRoutes(app);  // Add the routes to the app

    // Start the server on port 18080
    app.port(18080).multithreaded().run();

    return 0;
}