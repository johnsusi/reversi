cmake_minimum_required(VERSION 3.2)

project (reversi)

set(CMAKE_MODULE_PATH ${CMAKE_SOURCE_DIR}/cmake)

include(compiler)
include(platform)

include_directories(
  ${CMAKE_JS_INC}
  src
  )


add_library(${PROJECT_NAME} SHARED
  main.cpp
)

message("CMAKE_BINARY_DIR ${CMAKE_BINARY_DIR}")

set_target_properties(${PROJECT_NAME} PROPERTIES
  PREFIX ""
  SUFFIX ".node"
  OUTPUT_NAME "${CMAKE_PROJECT_NAME}-${NODE_PLATFORM}-${NODE_ARCH}-${NODE_RUNTIME}-${NODE_RUNTIMEVERSION}"
  RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}"
  ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}"
  LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}"
)

set(EXECUTABLE_OUTPUT_PATH "${CMAKE_BINARY_DIR}")

target_link_libraries(${PROJECT_NAME}
  ${CMAKE_JS_LIB}
)
