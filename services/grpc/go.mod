// Note: Use full path to ensure GOPATH is correct
module sg/services/grpc

go 1.16

require (
	google.golang.org/grpc v1.32.0
	sg/libraries/golang v0.0.0
)

replace sg/libraries/golang v0.0.0 => ../../libraries/golang
