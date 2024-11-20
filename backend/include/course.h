#pragma once

#include <iostream>
#include <string>
#include <vector>
#include <iomanip> // For only 1 decimal place

#include "assignment.h"

class Course{
private:
    // Member Variables
    std::string name;
    int id;
    int creditHours;
    std::string instructor;
    std::vector<Assignment> assignments;
    double grade;

public:
    // Constructors and Destructors
    Course(std::string name = "N/A", int id = -1, int credits = -1, std::string instructor = "N/A");
    ~Course();

    // Getters and setters
    std::string getName() { return name; }
    void setName(std::string name) { this->name = name; }
    int getId() { return id; }
    void setId(int id) { this->id = id; }
    int getCreditHours() { return creditHours; }
    void setCreditHours(int creditHours) { this->creditHours = creditHours; }
    std::string getInstructor() { return instructor; }
    void setInstructor(std::string instructor) { this->instructor = instructor; }
    int getGrade() { return grade; }
    double getMaxGrade();

    // Member Functions
    void createAssignment(std::string name = "N/A", int weight = 0, int grade = -1, std::string description = "N/A");

    void updateGrade();
    void print();
};