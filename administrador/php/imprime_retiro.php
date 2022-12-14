<?php
    include ("pdf/fpdf.php");
    include("conexion.php");
    class PDF extends FPDF
    {
        function Header()
        {
            $this->SetFont('Arial', 'B', '20');
            $this->Line(10, 35.5, 206, 35.5);
            $this->Cell(180, 15, 'RECIBO DE RETIRO', 0, 0, 'C', $this->Image('../img/agua.png', 15, 15, 25));
            $this->Ln(30);
        }
        function ImprimirTexto($file)
        {
            $txt = file_get_contents($file);
            $this->SetFont('Arial', '', 12);
            $this->MultiCell(0, 5, $txt);
        }
        Function Footer()
        {
            $this->SetY(-15);
            $this->SetFont('Arial', "I", 8);
            $this->Cell(0, 10, utf8_decode('Pagina ').$this->PageNo().'/{nb}', 0, 0, 'C');
        }
    }
    $pdf = new PDF('P', 'mm', 'Letter');
    $pdf->SetMargins(25, 15);
    $pdf->AliasNbPages();
    $pdf->AddPage();
    $pdf->SetTextColor(0x00, 0x00, 0x00);
    $pdf->SetFont("Arial", "b", 10);
    $query = 'SELECT *FROM retiro order by idRetiro';
    $result = mysqli_query($conexion, $query);
    if (!$result)
    {
        die(mysqli_error($conexion));
    }
    $pdf->SetTextColor(500, 0, 0);
    $pdf->Cell(25, 10,'Id', 1, 0);
    $pdf->Cell(45, 10,'Motivo', 1, 0);
    $pdf->Cell(45, 10,'Cantidad', 1, 0);
    $pdf->Cell(45, 10,'Fecha', 1, 1);
    $contador=0;
    while($row = mysqli_fetch_array($result))
    {
        $pdf->SetTextColor(0, 0, 500);
        $pdf->Cell(25, 10, $row[0], 1, 0);
        $pdf->Cell(45, 10, $row[2], 1, 0);
        $pdf->Cell(45, 10, $row[3], 1, 0);
        $pdf->Cell(45, 10, utf8_decode($row[4]), 1, 1);
        $contador++;
    }
    $pdf->Ln();
    $pdf->Output();
?>