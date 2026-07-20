# Copy generated images to public/ directory
$source = "C:\Users\pc\.gemini\antigravity-ide\brain\3f91bc91-a079-48ba-9293-7c5e3da940ea"
$dest = "d:\Work\Al-Tanweer\public"

Copy-Item "$source\hero_skyline_1784553889539.png" "$dest\hero-skyline.png" -Force
Copy-Item "$source\service_pest_control_1784553903072.png" "$dest\service-pest-control.png" -Force
Copy-Item "$source\service_repairs_1784553943137.png" "$dest\service-repairs.png" -Force
Copy-Item "$source\service_hvac_1784553912178.png" "$dest\service-hvac.png" -Force
Copy-Item "$source\service_cleaning_1784553932640.png" "$dest\service-cleaning.png" -Force
Copy-Item "$source\service_landscaping_1784553953651.png" "$dest\service-landscaping.png" -Force
Copy-Item "$source\service_painting_1784553971310.png" "$dest\service-painting.png" -Force
Copy-Item "$source\contact_manager_1784553982074.png" "$dest\contact-manager.png" -Force

Write-Host "All 8 images copied to public/ directory." -ForegroundColor Green
