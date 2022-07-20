import * as gcpdfviewer from '@grapecity/gcpdfviewer';
import repQuickStartSample from './assets/pdfs/TemporaryAdvanceForm.pdf';
import stamp1 from './assets/stamps/stamp1.png';
import stamp2 from './assets/stamps/stamp2.png';
import stamp3 from './assets/stamps/stamp3.png';
import stamp4 from './assets/stamps/stamp4.png';

var viewer = new gcpdfviewer.GcPdfViewer('#pdfviewer', { 
                supportApi: { apiUrl: 'https://localhost:7224/api/pdf-viewer' },
                stamp: {
                    stampCategories: [
                        { name: '印鑑', dpi: 96, stampImageUrls: [
                            stamp1,
                            stamp2,
                            stamp3,
                            stamp4]
                        }
                    ]
                }
            }
        );
    viewer.addDefaultPanels();
    viewer.addAnnotationEditorPanel();
    viewer.addFormEditorPanel();
    viewer.open(repQuickStartSample);