# PowerShell script: dump all files (with paths and content) from src folder into a single text file
$srcPath = "src"
$outputFile = "project_dump.txt"

# Ensure the output file is empty or created
if (Test-Path $outputFile) {
    Remove-Item $outputFile -Force
}

# Use a single stream writer to avoid file locking
$writer = [System.IO.StreamWriter]::new($outputFile, $false, [System.Text.Encoding]::UTF8)

try {
    Get-ChildItem -Path $srcPath -Recurse -File | ForEach-Object {
        $relativePath = $_.FullName.Replace((Get-Location).Path + "\", "")
        $writer.WriteLine("==== FILE: $relativePath ====")
        $writer.WriteLine("")
        $writer.WriteLine((Get-Content $_.FullName -Raw))
        $writer.WriteLine("`n")
    }
}
finally {
    $writer.Close()
}

Write-Host "✅ Dump complete. File saved as $outputFile"

#to run, write ./show-src.ps1 > project_dump.txt