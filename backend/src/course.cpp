#include "course.h"

Course::Course(std::string name, int id, int creditHours, std::string instructor) {
    this->name = name;
    this->id = id;
    this->creditHours = creditHours;
    this->instructor = instructor;
    grade = 0;
}

Course::~Course() {
}

// Getters and setters
double Course::getMaxGrade() {
    double maxGrade = 100;
    for (auto& curAssignment : assignments) {
        if(curAssignment.getGrade() >= 0) { // Make sure has a grade
            double curGrade = curAssignment.getGrade() * curAssignment.getWeight() / 10000;
            maxGrade -= curGrade;
        }
    }
    return maxGrade;
}

// Member Functions
void Course::createAssignment(std::string name, int weight, int grade, std::string description){
    Assignment newAssignment(name, weight, grade, description);
    assignments.push_back(newAssignment);

    updateGrade();
}

void Course::print() {
    std::cout << "Course Name: " << name << std::endl;
    std::cout << "Course Id: " << id << std::endl;
    std::cout << "Credit Hours: " << creditHours << std::endl;
    std::cout << "Instructor: " << instructor << std::endl;
    std::cout << "Grade: " << std::fixed << std::setprecision(1) << grade << std::endl;
}

void Course::updateGrade(){
    double totalWeight = 0;
    double totalGrade = 0;
    for (auto& curAssignment : assignments) {
        totalWeight += curAssignment.getWeight();
        totalGrade += curAssignment.getGrade() * curAssignment.getWeight();
    }
    grade = totalGrade / totalWeight;
}
