// tests/test_assignment.cpp

#include <gtest/gtest.h>
#include "assignment.h"

// Test case for the Assignment constructor
TEST(AssignmentTest, Constructor) {
    Assignment assignment("Test Assignment", 50, 85, "This is a test assignment");

    EXPECT_EQ(assignment.getName(), "Test Assignment");
    EXPECT_EQ(assignment.getWeight(), 50);
    EXPECT_EQ(assignment.getGrade(), 85);
    EXPECT_EQ(assignment.getDescription(), "This is a test assignment");
}

// Test case for the default constructor
TEST(AssignmentTest, DefaultConstructor) {
    Assignment assignment;

    EXPECT_EQ(assignment.getName(), "N/A");
    EXPECT_EQ(assignment.getWeight(), 0);
    EXPECT_EQ(assignment.getGrade(), -1);
    EXPECT_EQ(assignment.getDescription(), "N/A");
}

// Test case for the setters
TEST(AssignmentTest, Setters) {
    Assignment assignment;
    assignment.setName("Updated Assignment");
    assignment.setWeight(75);
    assignment.setGrade(90);
    assignment.setDescription("Updated description");

    EXPECT_EQ(assignment.getName(), "Updated Assignment");
    EXPECT_EQ(assignment.getWeight(), 75);
    EXPECT_EQ(assignment.getGrade(), 90);
    EXPECT_EQ(assignment.getDescription(), "Updated description");
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}