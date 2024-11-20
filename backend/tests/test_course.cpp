// tests/test_course.cpp

#include <gtest/gtest.h>
#include "course.h"

// Test case for the Course constructor
TEST(CourseTest, Constructor) {
    Course course("Test Course", 101, 3, "Dr. Smith");

    EXPECT_EQ(course.getName(), "Test Course");
    EXPECT_EQ(course.getId(), 101);
    EXPECT_EQ(course.getCreditHours(), 3);
    EXPECT_EQ(course.getInstructor(), "Dr. Smith");
}

// Test case for adding an assignment
TEST(CourseTest, AddAssignment) {
    Course course("Test Course", 101, 3, "Dr. Smith");
    course.createAssignment("Test Assignment", 50, 85, "This is a test assignment");
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}