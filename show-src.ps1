# Show content of each file under src, with headers for readability
$srcPath = "src" # or adjust to your project path

Get-ChildItem -Path $srcPath -Recurse -File | ForEach-Object {
    Write-Host "==== FILE: $($_.FullName.Replace((Get-Location).Path + '\', '')) ====" -ForegroundColor Cyan
    Get-Content $_.FullName
    Write-Host "`n" # extra line for spacing
}

#to run, write ./show-src.ps1 > project_dump.txt