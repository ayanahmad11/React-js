# React-js

# parcel
-Dev build
-Local-server
-'HMR'- Hot Module replacement
-File Watching Algo -  written in c++
-Caching - Faster Builds 
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling- support Older Browsers
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking - remove unused code
-Different Dev and prod build

# Design Of Food Ordering App
/*
!~ Design
* Header
*   -Logo
*   -Nav Items
* Body
*   -Search
*   -restaurant Container
*       -restaurant card
*           -img
*           -Name of res, star rating,cuisine, delivery tie
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
*/

- Two types of export

1. Default import / export
    export default Component;
    import Component from 'path'

2. Named import / export
    export const Component;
    import {Component} from 'path'


# Reconcilation Algorithm (React Fiber) - (react-16)
- virtual dom -> is a representation of an actual dom
- Diffing Algorithm -> finds out the difference btw updated vdom and previous vdom
- 
 