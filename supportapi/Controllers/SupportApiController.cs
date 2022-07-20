using GrapeCity.Documents.Pdf;
using GrapeCity.Documents.Pdf.ViewerSupportApi.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace supportapi.Controllers;

[Route("api/pdf-viewer")]
[ApiController]
public class SupportApiController : GcPdfViewerController
{
    public SupportApiController()
    {
        // DioDocs for PDF �{�̂̃��C�Z���X�L�[��ݒ肵�܂�
        GcPdfDocument.SetLicenseKey("");
    }
}