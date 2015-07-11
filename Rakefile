require 'rubygems'
require 'bundler/setup'

Bundler.require

npm = Npm.new
npm.install

def build(runtime, version, arch)
  FileUtils.rm_rf('build')
  fail unless system <<-SHELL
      cmake-js rebuild \
          --runtime=#{runtime} \
          --runtime-version=#{version} \
          --arch=#{arch}
  SHELL

  FileUtils.mkdir_p('tmp/current_build')
  FileUtils.cp( Dir.glob(['build/*.node', 'build/Release/*.node']), 'tmp/current_build')
end

task :build do
  #build('electron', '0.29.2', 'ia32')
  build('electron', '0.28.3', 'x64')
  build('electron', '0.29.2', 'x64')
end

task :default => :build
