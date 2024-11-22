#include "routes/mainRoutes.h"

// Private

// Public

MainRoutes::MainRoutes() {
    // Set up routes
    std::cout << "Setting up routes..." << std::endl;
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
}