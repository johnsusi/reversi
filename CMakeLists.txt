cmake_minimum_required(VERSION 3.1  )

project (reversi)

set(CMAKE_MODULE_PATH ${CMAKE_SOURCE_DIR}/cmake)

include(compiler)

add_library(${PROJECT_NAME}
  src/reversi.cpp src/reversi.h
)


if(DEFINED NODE_RUNTIME)

  include(platform)

  include_directories(${CMAKE_JS_INC})


  add_library(${PROJECT_NAME}-wrapper SHARED
    src/main.cpp
  )

  if( "${NODE_RUNTIME}" MATCHES "iojs")
    set(NODE_RUNTIME "node")
  endif()

  set_target_properties(${PROJECT_NAME}-wrapper PROPERTIES
    PREFIX ""
    SUFFIX ".node"
    OUTPUT_NAME "${CMAKE_PROJECT_NAME}-${NODE_PLATFORM}-${NODE_ARCH}-${NODE_RUNTIME}-${NODE_RUNTIMEVERSION}"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}"
  )

  target_link_libraries(${PROJECT_NAME}-wrapper ${CMAKE_JS_LIB} )

endif()
