#include "routes/mainRoutes.h"

// Private

// Public

MainRoutes::MainRoutes() {
    // Constructor
}

void MainRoutes::addRoutes(crow::SimpleApp& app){
    // Define a route for the root URL
    CROW_ROUTE(app, "/")([](){
        return "Hello, World!";
    });

    // Define a route with a parameter
    CROW_ROUTE(app, "/hello/<string>")([](const std::string& name){
        return "Hello, " + name + "!";
    });

    // Cout
    std::cout << "---Base routes setup---" << std::endl;
}