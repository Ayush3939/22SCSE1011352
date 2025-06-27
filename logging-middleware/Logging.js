export const log = (action, message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${action}: ${message}`); 
};
