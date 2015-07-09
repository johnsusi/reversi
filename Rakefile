require 'rubygems'
require 'bundler/setup'
require 'json/pure'

Bundler.require



def build(runtime, version, arch)
  build_dir = "build-#{runtime}-#{version}-#{arch}"

  FileUtils.mkdir_p(build_dir)
  Dir.chdir(build_dir) do

    config = {
      'private' => true,
      'dependencies' => {
        'reversi' => 'file:..'
      },
      'cmake-js' => {
        'runtime'        => runtime,
        'runtimeVersion' => version,
        'arch'           => arch
      }
    }

    File.open('package.json', 'w') do |file|
      file.write( JSON.pretty_generate(config) )
    end

    fail unless system("npm install")

  end
end

task :build do
  #build('electron', '0.29.2', 'ia32')
  build('electron', '0.28.3', 'x64')
  build('electron', '0.29.2', 'x64')
end

task :default => :build
