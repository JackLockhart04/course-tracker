#pragma once

#include <iostream>
#include <string>

class Assignment {
private:
    // Member Variables
    std::string name;
    int id;
    std::string description;
    int weight;
    int grade;

public:
    // Constructors and Destructors
    Assignment(std::string name = "N/A", double weight = 0, double grade = -1, std::string description = "N/A");
    ~Assignment();

    // Getters and setters
    std::string getName() { return name; }
    void setName(std::string name) { this->name = name; }
    double getWeight() { return weight; }
    void setWeight(double weight) { this->weight = weight; }
    double getGrade() { return grade; }
    void setGrade(double grade) { this->grade = grade; }
    std::string getDescription() { return description; }
    void setDescription(std::string description) { this->description = description; }


    // Member Functions
    void print();
};