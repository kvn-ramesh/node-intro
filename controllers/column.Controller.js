const { calculateColumnSectionArea } = require('../utils/columnFunction');
const dotenv = require('dotenv');
dotenv.config({path : './config/config.env'});
// Calculate and return column section area
const columnSectionAreaResults = (req, res) => {
    const minColWidth = Number(process.env.MIN_WIDTH);
    const maxColWidth = Number(process.env.MAX_WIDTH);
    const colWidthIncr = Number(process.env.WIDTH_INCREMENT);
    const colWidthRange = { min: minColWidth, max: maxColWidth, increment: colWidthIncr };
    const results = []; // Initialize array to store result

    // Iterate over the range of column widths
    for (let colWidth = colWidthRange.min; colWidth <= colWidthRange.max; colWidth += colWidthRange.increment) {
        // Calculate area of the Square Column Section
        const ColumnSectionArea = calculateColumnSectionArea(colWidth);
        // Construct JSON object for current load
        const result = {
            colWidthMm : colWidth,
            ColumnSectionAreaMm2 : ColumnSectionArea
        };
    // Add result to array
    results.push(result);
    }
// Send JSON response
res.json(results);    
};

module.exports = {columnSectionAreaResults};