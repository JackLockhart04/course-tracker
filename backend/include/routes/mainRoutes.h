#pragma once

#include "crow.h"

class MainRoutes {
    private:
    public:
        MainRoutes();

        void addRoutes(crow::SimpleApp& app);
};