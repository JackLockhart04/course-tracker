#include "assignment.h"

Assignment::Assignment(std::string name, double weight, double grade, std::string description){
    this->name = name;
    this->description = description;
    this->weight = weight;
    this->grade = grade;
}

Assignment::~Assignment(){
}

void Assignment::print(){
    std::cout << "Assignment Name: " << name << std::endl;
    std::cout << "\tGrade: " << grade << std::endl;
    std::cout << "\tWeight: " << weight << std::endl;
    std::cout << "\tDescription: " << description << std::endl;
}