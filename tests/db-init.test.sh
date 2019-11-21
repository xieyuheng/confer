#!/bin/bash

SOURCE=${BASH_SOURCE[0]}
DIR=$(dirname $SOURCE)

node $DIR/person-init.js
node $DIR/topic-init.js
node $DIR/talk-init.js
node $DIR/talk-on-topic-init.js
