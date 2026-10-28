export function absorptionOfLight(thickness, maximum_wavelength, wavelength_of_light, direct_band_gap = true) {
    let a;
    let alpha;
    
    if (wavelength_of_light > maximum_wavelength) {
        alpha = 0.0;
    } 
    else {
        let intermediate = (1 / wavelength_of_light) - (1 / maximum_wavelength);
        
        
        if (direct_band_gap === true) {
            alpha = Math.pow(1.24 * intermediate, 0.5); 
        } 
        else if (direct_band_gap === false) {
            alpha = Math.pow(1.24 * intermediate, 2);    
        }
        
    
    }
    a = c*Math.exp(-alpha * thickness);
    
    return a;
}
