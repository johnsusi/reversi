#ifdef WIN32
#ifndef WIN32_LEAN_AND_MEAN
#define WIN32_LEAN_AND_MEAN
#endif
#define NOMINMAX
#include <windows.h>
#endif

#include <nan.h>

void init(v8::Handle<v8::Object> exports) {

}

NODE_MODULE(reversi, init)
