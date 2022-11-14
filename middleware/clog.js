// Custom middleware that logs out the type and path of each request to the server. Used clog file from the mini project!
const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  exports.clog = clog;