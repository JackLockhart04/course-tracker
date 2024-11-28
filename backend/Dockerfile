# Stage 1: Build Stage (Use Amazon Linux for building dependencies)
FROM amazonlinux:2 AS builder

# Install necessary build tools and libraries
RUN yum update -y && \
    yum install -y \
    gcc \
    gcc-c++ \
    make \
    cmake \
    libcurl-devel \
    openssl-devel \
    wget \
    git \
    tar \
    gzip

# Download and install pre-built CMake binary
RUN wget https://github.com/Kitware/CMake/releases/download/v3.29.0/cmake-3.29.0-linux-x86_64.sh && \
    chmod +x cmake-3.29.0-linux-x86_64.sh && \
    ./cmake-3.29.0-linux-x86_64.sh --skip-license --prefix=/usr/local && \
    rm cmake-3.29.0-linux-x86_64.sh

    # Set the working directory inside the container
WORKDIR /app

# Copy the entire project directory to the container
COPY . .

# Create a build directory and run CMake to configure and build the project
RUN mkdir build && \
    cd build && \
    cmake .. && \
    cmake --build . && \
    cp CourseTracker /opt/

# Stage 2: Runtime Stage (Use the AWS Lambda base image)
FROM public.ecr.aws/lambda/provided:al2

# Copy the compiled binary from the builder stage
COPY --from=builder /opt/CourseTracker /opt/CourseTracker

# Clean up the builder stage (build dependencies not needed at runtime)
RUN yum remove -y \
    gcc \
    gcc-c++ \
    make \
    cmake \
    wget \
    git \
    tar \
    gzip \
    # libcurl-devel \
    openssl-devel && \
    yum clean all && \
    rm -rf /var/cache/yum

# Tell Docker to expose port 18080 on the container
EXPOSE 18080

# Set the CMD to your compiled Lambda function binary
ENTRYPOINT ["/opt/CourseTracker"]