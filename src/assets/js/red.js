if (typeof newscript === 'undefined') {
let newscript = document.createElement('script');
newscript.type = 'text/javascript';
newscript.async = true;
newscript.src = 'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(newscript);
}

function cargarRed() {
    urlProject = document.getElementById('txt-url').textContent;
    // initialize global variables.
    var edges;
    var nodes;
    var network;
    var container;
    var options, data;


    // This method is responsible for drawing the graph, returns the drawn network
    function drawGraph() {
        var container = document.getElementById('mynetwork');



        // parsing and collecting nodes and edges from the python
        nodes = new vis.DataSet([{"color": "#e5243b", "font": {"color": "black"}, "id": "PROBLEMA SOCIAL", "label": "PROBLEMA SOCIAL", "shape": "dot", "title": "PROBLEMA SOCIAL Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eDESARROLLO SOCIAL", "value": 5}, {"color": "#e5243b", "font": {"color": "black"}, "id": "ESTILO DE VIDA", "label": "ESTILO DE VIDA", "shape": "dot", "title": "ESTILO DE VIDA Neighbors:\u003cbr\u003ePODER DE COMPRA\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eNECESIDADES BASICAS\u003cbr\u003eVIDA COTIDIANA\u003cbr\u003eINGRESOS\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eTRABAJO\u003cbr\u003ePROBLEMA SOCIAL", "value": 11}, {"color": "#e5243b", "font": {"color": "black"}, "id": "POBREZA", "label": "POBREZA", "shape": "dot", "title": "POBREZA Neighbors:\u003cbr\u003eCOSTO DE LA VIDA\u003cbr\u003eVIDA COTIDIANA\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eMITIGACION DE LA POBREZA\u003cbr\u003eDESARROLLO SOCIAL\u003cbr\u003eSALARIO\u003cbr\u003ePROBLEMA SOCIAL\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eNECESIDADES BASICAS\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003eINGRESOS\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eINGRESOS FAMILIARES\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eHAMBRE\u003cbr\u003eRIQUEZA\u003cbr\u003ePERSONAS SIN HOGAR\u003cbr\u003eTRABAJO\u003cbr\u003eALIVIO DE LA POBREZA\u003cbr\u003eCONDICIONES ECONOMICAS\u003cbr\u003ePOBREZA URBANA\u003cbr\u003ePOBREZA RURAL\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003ePA\u00cdS EN DESARROLLO\u003cbr\u003ePOBRE\u003cbr\u003eCOSTE DE LA VIDA\u003cbr\u003eTRABAJO DE MENORES\u003cbr\u003eSALARIO M\u00cdNIMO\u003cbr\u003eCULTURA DE LA POBREZA\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eMERCADO DE TRABAJO", "value": 31}, {"color": "#e5243b", "font": {"color": "black"}, "id": "EXCLUSI\u00d3N SOCIAL", "label": "EXCLUSI\u00d3N SOCIAL", "shape": "dot", "title": "EXCLUSI\u00d3N SOCIAL Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eNECESIDADES BASICAS\u003cbr\u003ePOBREZA URBANA\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003ePOBREZA RURAL\u003cbr\u003eVIDA COTIDIANA\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eTRABAJO DE MENORES\u003cbr\u003eDERECHO A LA EDUCACION\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eDESARROLLO SOCIAL\u003cbr\u003eHAMBRE\u003cbr\u003eRIQUEZA\u003cbr\u003ePERSONAS SIN HOGAR\u003cbr\u003eTRABAJO\u003cbr\u003ePROBLEMA SOCIAL", "value": 18}, {"color": "#e5243b", "font": {"color": "black"}, "id": "CALIDAD DE LA VIDA", "label": "CALIDAD DE LA VIDA", "shape": "dot", "title": "CALIDAD DE LA VIDA Neighbors:\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eDESARROLLO SOCIAL\u003cbr\u003ePROBLEMA SOCIAL\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eNECESIDADES BASICAS\u003cbr\u003eINGRESOS\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eHAMBRE\u003cbr\u003ePERSONAS SIN HOGAR\u003cbr\u003eTRABAJO\u003cbr\u003eCONDICIONES ECONOMICAS\u003cbr\u003ePOBREZA URBANA\u003cbr\u003ePOBREZA RURAL\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003ePA\u00cdS EN DESARROLLO\u003cbr\u003ePOBREZA\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eESTRATEGIA DE DESARROLLO", "value": 20}, {"color": "#e5243b", "font": {"color": "black"}, "id": "DESARROLLO SOCIAL", "label": "DESARROLLO SOCIAL", "shape": "dot", "title": "DESARROLLO SOCIAL Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eTRABAJO\u003cbr\u003ePROBLEMA SOCIAL", "value": 6}, {"color": "#e5243b", "font": {"color": "black"}, "id": "CONDICIONES ECONOMICAS", "label": "CONDICIONES ECONOMICAS", "shape": "dot", "title": "CONDICIONES ECONOMICAS Neighbors:\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003ePOBREZA\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eINGRESOS FAMILIARES", "value": 4}, {"color": "#e5243b", "font": {"color": "black"}, "id": "CONDICIONES SOCIALES", "label": "CONDICIONES SOCIALES", "shape": "dot", "title": "CONDICIONES SOCIALES Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003eINGRESOS\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003ePERSONAS SIN HOGAR\u003cbr\u003eTRABAJO\u003cbr\u003eCONDICIONES ECONOMICAS", "value": 10}, {"color": "#e5243b", "font": {"color": "black"}, "id": "NECESIDADES BASICAS", "label": "NECESIDADES BASICAS", "shape": "dot", "title": "NECESIDADES BASICAS Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eINGRESOS\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eESTRATEGIA DE DESARROLLO", "value": 8}, {"color": "#e5243b", "font": {"color": "black"}, "id": "INGRESOS", "label": "INGRESOS", "shape": "dot", "title": "INGRESOS Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eNECESIDADES BASICAS\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003ePRESUPUESTO FAMILIAR\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eSALARIO M\u00cdNIMO\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eRIQUEZA\u003cbr\u003eTRABAJO\u003cbr\u003eSALARIO", "value": 15}, {"color": "#e5243b", "font": {"color": "black"}, "id": "DISTRIBUCI\u00d3N DEL INGRESO", "label": "DISTRIBUCI\u00d3N DEL INGRESO", "shape": "dot", "title": "DISTRIBUCI\u00d3N DEL INGRESO Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eINGRESOS\u003cbr\u003eSALARIO M\u00cdNIMO\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eDESARROLLO SOCIAL\u003cbr\u003eRIQUEZA\u003cbr\u003eSALARIO", "value": 10}, {"color": "#e5243b", "font": {"color": "black"}, "id": "MERCADO DE TRABAJO", "label": "MERCADO DE TRABAJO", "shape": "dot", "title": "MERCADO DE TRABAJO Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eNECESIDADES BASICAS\u003cbr\u003ePOBREZA URBANA\u003cbr\u003eCONDICIONES DE EMPLEO\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003eTRABAJO FORZOSO\u003cbr\u003eINGRESOS\u003cbr\u003eDERECHO LABORAL\u003cbr\u003eSALARIO M\u00cdNIMO\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003ePA\u00cdS EN DESARROLLO\u003cbr\u003eTRABAJO\u003cbr\u003eSALARIO", "value": 16}, {"color": "#e5243b", "font": {"color": "black"}, "id": "POBREZA URBANA", "label": "POBREZA URBANA", "shape": "dot", "title": "POBREZA URBANA Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003ePOBREZA RURAL\u003cbr\u003eVIDA COTIDIANA\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eEXCLUSI\u00d3N SOCIAL", "value": 6}, {"color": "#e5243b", "font": {"color": "black"}, "id": "TRABAJO", "label": "TRABAJO", "shape": "dot", "title": "TRABAJO Neighbors:\u003cbr\u003ePOBRE\u003cbr\u003eMANO DE OBRA\u003cbr\u003ePOBREZA\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eVIDA COTIDIANA\u003cbr\u003eINGRESOS\u003cbr\u003eDERECHO LABORAL\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eTRABAJO DE MENORES\u003cbr\u003eCULTURA DE LA POBREZA\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eDESARROLLO SOCIAL\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003ePA\u00cdS EN DESARROLLO\u003cbr\u003eSALARIO", "value": 18}, {"color": "#e5243b", "font": {"color": "black"}, "id": "TRABAJO DE MENORES", "label": "TRABAJO DE MENORES", "shape": "dot", "title": "TRABAJO DE MENORES Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eTRABAJO FORZOSO\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eHAMBRE\u003cbr\u003eTRABAJO", "value": 6}, {"color": "#e5243b", "font": {"color": "black"}, "id": "POBRE", "label": "POBRE", "shape": "dot", "title": "POBRE Neighbors:\u003cbr\u003eTRABAJO\u003cbr\u003ePOBREZA\u003cbr\u003eHAMBRE", "value": 3}, {"color": "#e5243b", "font": {"color": "black"}, "id": "CULTURA DE LA POBREZA", "label": "CULTURA DE LA POBREZA", "shape": "dot", "title": "CULTURA DE LA POBREZA Neighbors:\u003cbr\u003eTRABAJO\u003cbr\u003ePOBREZA", "value": 2}, {"color": "#e5243b", "font": {"color": "black"}, "id": "INGRESOS FAMILIARES", "label": "INGRESOS FAMILIARES", "shape": "dot", "title": "INGRESOS FAMILIARES Neighbors:\u003cbr\u003ePOBREZA RURAL\u003cbr\u003ePOBREZA\u003cbr\u003eINGRESOS FAMILIARES\u003cbr\u003eCONDICIONES ECONOMICAS", "value": 4}, {"color": "#e5243b", "font": {"color": "black"}, "id": "CONDICIONES DE VIDA", "label": "CONDICIONES DE VIDA", "shape": "dot", "title": "CONDICIONES DE VIDA Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eNECESIDADES BASICAS\u003cbr\u003eINGRESOS\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eTRABAJO", "value": 11}, {"color": "#e5243b", "font": {"color": "black"}, "id": "ALIVIO DE LA POBREZA", "label": "ALIVIO DE LA POBREZA", "shape": "dot", "title": "ALIVIO DE LA POBREZA Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003ePA\u00cdS EN DESARROLLO", "value": 2}, {"color": "#e5243b", "font": {"color": "black"}, "id": "HAMBRE", "label": "HAMBRE", "shape": "dot", "title": "HAMBRE Neighbors:\u003cbr\u003ePOBRE\u003cbr\u003ePOBREZA\u003cbr\u003ePOBREZA RURAL\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eTRABAJO DE MENORES\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eRIQUEZA", "value": 7}, {"color": "#e5243b", "font": {"color": "black"}, "id": "NIVEL DE VIDA", "label": "NIVEL DE VIDA", "shape": "dot", "title": "NIVEL DE VIDA Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003eVIDA COTIDIANA\u003cbr\u003eINGRESOS\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003ePA\u00cdS EN DESARROLLO\u003cbr\u003eSALARIO", "value": 10}, {"color": "#e5243b", "font": {"color": "black"}, "id": "PA\u00cdS EN DESARROLLO", "label": "PA\u00cdS EN DESARROLLO", "shape": "dot", "title": "PA\u00cdS EN DESARROLLO Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eTRABAJO\u003cbr\u003eALIVIO DE LA POBREZA", "value": 6}, {"color": "#e5243b", "font": {"color": "black"}, "id": "VIDA COTIDIANA", "label": "VIDA COTIDIANA", "shape": "dot", "title": "VIDA COTIDIANA Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003ePOBREZA URBANA\u003cbr\u003ePOBREZA RURAL\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003ePERSONAS SIN HOGAR\u003cbr\u003eTRABAJO", "value": 8}, {"color": "#e5243b", "font": {"color": "black"}, "id": "RIQUEZA", "label": "RIQUEZA", "shape": "dot", "title": "RIQUEZA Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003eINGRESOS\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eHAMBRE", "value": 5}, {"color": "#e5243b", "font": {"color": "black"}, "id": "POBREZA RURAL", "label": "POBREZA RURAL", "shape": "dot", "title": "POBREZA RURAL Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003ePOBREZA URBANA\u003cbr\u003eVIDA COTIDIANA\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eINGRESOS FAMILIARES\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eHAMBRE\u003cbr\u003eESTRATEGIA DE DESARROLLO\u003cbr\u003eSALARIO", "value": 10}, {"color": "#e5243b", "font": {"color": "black"}, "id": "SALARIO", "label": "SALARIO", "shape": "dot", "title": "SALARIO Neighbors:\u003cbr\u003eCOSTO DE LA VIDA\u003cbr\u003eMANO DE OBRA\u003cbr\u003eCOSTE DE LA VIDA\u003cbr\u003ePOBREZA\u003cbr\u003eBENEFICIOS COMPLEMENTARIOS\u003cbr\u003ePOL\u00cdTICA SALARIAL\u003cbr\u003eINCENTIVOS SALARIALES\u003cbr\u003eCONDICIONES DE EMPLEO\u003cbr\u003ePOBREZA RURAL\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003eINGRESOS\u003cbr\u003eSALARIO M\u00cdNIMO\u003cbr\u003eDERECHO A LA EDUCACION\u003cbr\u003eNIVEL DE VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eTRABAJO", "value": 17}, {"color": "#e5243b", "font": {"color": "black"}, "id": "SALARIO M\u00cdNIMO", "label": "SALARIO M\u00cdNIMO", "shape": "dot", "title": "SALARIO M\u00cdNIMO Neighbors:\u003cbr\u003eCOSTO DE LA VIDA\u003cbr\u003eCOSTE DE LA VIDA\u003cbr\u003ePOBREZA\u003cbr\u003eDISTRIBUCI\u00d3N DEL INGRESO\u003cbr\u003eINGRESOS\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eSALARIO", "value": 7}, {"color": "#e5243b", "font": {"color": "black"}, "id": "PERSONAS SIN HOGAR", "label": "PERSONAS SIN HOGAR", "shape": "dot", "title": "PERSONAS SIN HOGAR Neighbors:\u003cbr\u003ePOBREZA\u003cbr\u003eVIDA COTIDIANA\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eEXCLUSI\u00d3N SOCIAL", "value": 5}, {"color": "#e5243b", "font": {"color": "black"}, "id": "COSTE DE LA VIDA", "label": "COSTE DE LA VIDA", "shape": "dot", "title": "COSTE DE LA VIDA Neighbors:\u003cbr\u003eCOSTO DE LA VIDA\u003cbr\u003ePOBREZA\u003cbr\u003eSALARIO M\u00cdNIMO\u003cbr\u003eSALARIO", "value": 4}, {"color": "#e5243b", "font": {"color": "black"}, "id": "COSTO DE LA VIDA", "label": "COSTO DE LA VIDA", "shape": "dot", "title": "COSTO DE LA VIDA Neighbors:\u003cbr\u003eSALARIO\u003cbr\u003eCOSTE DE LA VIDA\u003cbr\u003ePOBREZA\u003cbr\u003eSALARIO M\u00cdNIMO", "value": 4}, {"color": "#e5243b", "font": {"color": "black"}, "id": "CONDICIONES DE TRABAJO", "label": "CONDICIONES DE TRABAJO", "shape": "dot", "title": "CONDICIONES DE TRABAJO Neighbors:\u003cbr\u003eMANO DE OBRA\u003cbr\u003ePOBREZA\u003cbr\u003eCONDICIONES DE VIDA\u003cbr\u003eCONDICIONES DE EMPLEO\u003cbr\u003ePOBREZA RURAL\u003cbr\u003eINGRESOS\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eCONDICIONES SOCIALES\u003cbr\u003eTRABAJO DE MENORES\u003cbr\u003eESTILO DE VIDA\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eTRABAJO\u003cbr\u003eSALARIO", "value": 13}, {"color": "#e5243b", "font": {"color": "black"}, "id": "MITIGACION DE LA POBREZA", "label": "MITIGACION DE LA POBREZA", "shape": "dot", "title": "MITIGACION DE LA POBREZA Neighbors:\u003cbr\u003ePOBREZA", "value": 1}, {"color": "#e5243b", "font": {"color": "black"}, "id": "ESTRATEGIA DE DESARROLLO", "label": "ESTRATEGIA DE DESARROLLO", "shape": "dot", "title": "ESTRATEGIA DE DESARROLLO Neighbors:\u003cbr\u003ePOBREZA RURAL\u003cbr\u003eCALIDAD DE LA VIDA\u003cbr\u003eNECESIDADES BASICAS", "value": 3}, {"color": "#e5243b", "font": {"color": "black"}, "id": "DERECHO A LA EDUCACION", "label": "DERECHO A LA EDUCACION", "shape": "dot", "title": "DERECHO A LA EDUCACION Neighbors:\u003cbr\u003eEXCLUSI\u00d3N SOCIAL\u003cbr\u003eSALARIO", "value": 2}, {"color": "#e5243b", "font": {"color": "black"}, "id": "PODER DE COMPRA", "label": "PODER DE COMPRA", "shape": "dot", "title": "PODER DE COMPRA Neighbors:\u003cbr\u003eESTILO DE VIDA", "value": 1}, {"color": "#e5243b", "font": {"color": "black"}, "id": "BENEFICIOS COMPLEMENTARIOS", "label": "BENEFICIOS COMPLEMENTARIOS", "shape": "dot", "title": "BENEFICIOS COMPLEMENTARIOS Neighbors:\u003cbr\u003eSALARIO", "value": 1}, {"color": "#e5243b", "font": {"color": "black"}, "id": "POL\u00cdTICA SALARIAL", "label": "POL\u00cdTICA SALARIAL", "shape": "dot", "title": "POL\u00cdTICA SALARIAL Neighbors:\u003cbr\u003eSALARIO\u003cbr\u003eINCENTIVOS SALARIALES", "value": 2}, {"color": "#e5243b", "font": {"color": "black"}, "id": "INCENTIVOS SALARIALES", "label": "INCENTIVOS SALARIALES", "shape": "dot", "title": "INCENTIVOS SALARIALES Neighbors:\u003cbr\u003eSALARIO\u003cbr\u003ePOL\u00cdTICA SALARIAL", "value": 2}, {"color": "#e5243b", "font": {"color": "black"}, "id": "CONDICIONES DE EMPLEO", "label": "CONDICIONES DE EMPLEO", "shape": "dot", "title": "CONDICIONES DE EMPLEO Neighbors:\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eSALARIO", "value": 3}, {"color": "#e5243b", "font": {"color": "black"}, "id": "MANO DE OBRA", "label": "MANO DE OBRA", "shape": "dot", "title": "MANO DE OBRA Neighbors:\u003cbr\u003eCONDICIONES DE TRABAJO\u003cbr\u003eTRABAJO\u003cbr\u003eSALARIO", "value": 3}, {"color": "#e5243b", "font": {"color": "black"}, "id": "DERECHO LABORAL", "label": "DERECHO LABORAL", "shape": "dot", "title": "DERECHO LABORAL Neighbors:\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eTRABAJO", "value": 2}, {"color": "#e5243b", "font": {"color": "black"}, "id": "TRABAJO FORZOSO", "label": "TRABAJO FORZOSO", "shape": "dot", "title": "TRABAJO FORZOSO Neighbors:\u003cbr\u003eMERCADO DE TRABAJO\u003cbr\u003eTRABAJO DE MENORES", "value": 2}, {"color": "#e5243b", "font": {"color": "black"}, "id": "PRESUPUESTO FAMILIAR", "label": "PRESUPUESTO FAMILIAR", "shape": "dot", "title": "PRESUPUESTO FAMILIAR Neighbors:\u003cbr\u003eINGRESOS", "value": 1}]);
                  edges = new vis.DataSet([{"from": "PROBLEMA SOCIAL", "to": "ESTILO DE VIDA", "value": 1}, {"from": "PROBLEMA SOCIAL", "to": "POBREZA", "value": 4}, {"from": "PROBLEMA SOCIAL", "to": "EXCLUSI\u00d3N SOCIAL", "value": 1}, {"from": "PROBLEMA SOCIAL", "to": "CALIDAD DE LA VIDA", "value": 1}, {"from": "PROBLEMA SOCIAL", "to": "DESARROLLO SOCIAL", "value": 1}, {"from": "POBREZA", "to": "CONDICIONES ECONOMICAS", "value": 4}, {"from": "CONDICIONES ECONOMICAS", "to": "CONDICIONES SOCIALES", "value": 6}, {"from": "POBREZA", "to": "CONDICIONES SOCIALES", "value": 10}, {"from": "POBREZA", "to": "NECESIDADES BASICAS", "value": 11}, {"from": "NECESIDADES BASICAS", "to": "INGRESOS", "value": 2}, {"from": "POBREZA", "to": "INGRESOS", "value": 30}, {"from": "POBREZA", "to": "DISTRIBUCI\u00d3N DEL INGRESO", "value": 20}, {"from": "POBREZA", "to": "EXCLUSI\u00d3N SOCIAL", "value": 62}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "NECESIDADES BASICAS", "value": 1}, {"from": "NECESIDADES BASICAS", "to": "MERCADO DE TRABAJO", "value": 1}, {"from": "POBREZA", "to": "MERCADO DE TRABAJO", "value": 15}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "MERCADO DE TRABAJO", "value": 6}, {"from": "POBREZA", "to": "POBREZA URBANA", "value": 1}, {"from": "POBREZA", "to": "TRABAJO", "value": 22}, {"from": "POBREZA", "to": "TRABAJO DE MENORES", "value": 2}, {"from": "POBREZA", "to": "POBRE", "value": 12}, {"from": "POBREZA", "to": "CULTURA DE LA POBREZA", "value": 2}, {"from": "CULTURA DE LA POBREZA", "to": "TRABAJO", "value": 1}, {"from": "POBREZA", "to": "INGRESOS FAMILIARES", "value": 6}, {"from": "INGRESOS FAMILIARES", "to": "INGRESOS FAMILIARES", "value": 22}, {"from": "POBREZA", "to": "CONDICIONES DE VIDA", "value": 3}, {"from": "POBREZA", "to": "ALIVIO DE LA POBREZA", "value": 2}, {"from": "POBREZA", "to": "DESARROLLO SOCIAL", "value": 10}, {"from": "POBREZA", "to": "HAMBRE", "value": 16}, {"from": "POBREZA", "to": "NIVEL DE VIDA", "value": 3}, {"from": "POBREZA", "to": "PA\u00cdS EN DESARROLLO", "value": 2}, {"from": "DISTRIBUCI\u00d3N DEL INGRESO", "to": "MERCADO DE TRABAJO", "value": 7}, {"from": "POBREZA", "to": "VIDA COTIDIANA", "value": 2}, {"from": "DISTRIBUCI\u00d3N DEL INGRESO", "to": "DESARROLLO SOCIAL", "value": 1}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "CALIDAD DE LA VIDA", "value": 4}, {"from": "POBREZA", "to": "CALIDAD DE LA VIDA", "value": 19}, {"from": "POBREZA", "to": "RIQUEZA", "value": 9}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "RIQUEZA", "value": 1}, {"from": "POBREZA", "to": "POBREZA RURAL", "value": 2}, {"from": "POBREZA", "to": "SALARIO", "value": 1}, {"from": "HAMBRE", "to": "CALIDAD DE LA VIDA", "value": 1}, {"from": "POBRE", "to": "TRABAJO", "value": 1}, {"from": "POBREZA", "to": "SALARIO M\u00cdNIMO", "value": 1}, {"from": "SALARIO M\u00cdNIMO", "to": "INGRESOS", "value": 2}, {"from": "POBREZA", "to": "PERSONAS SIN HOGAR", "value": 5}, {"from": "POBREZA", "to": "COSTE DE LA VIDA", "value": 2}, {"from": "COSTE DE LA VIDA", "to": "COSTO DE LA VIDA", "value": 4}, {"from": "POBREZA", "to": "COSTO DE LA VIDA", "value": 2}, {"from": "NECESIDADES BASICAS", "to": "CONDICIONES DE VIDA", "value": 2}, {"from": "NIVEL DE VIDA", "to": "EXCLUSI\u00d3N SOCIAL", "value": 1}, {"from": "MERCADO DE TRABAJO", "to": "INGRESOS", "value": 7}, {"from": "NIVEL DE VIDA", "to": "DISTRIBUCI\u00d3N DEL INGRESO", "value": 1}, {"from": "NECESIDADES BASICAS", "to": "CALIDAD DE LA VIDA", "value": 3}, {"from": "POBREZA", "to": "CONDICIONES DE TRABAJO", "value": 1}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "PERSONAS SIN HOGAR", "value": 8}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "HAMBRE", "value": 1}, {"from": "DISTRIBUCI\u00d3N DEL INGRESO", "to": "EXCLUSI\u00d3N SOCIAL", "value": 1}, {"from": "POBREZA", "to": "MITIGACION DE LA POBREZA", "value": 1}, {"from": "POBREZA RURAL", "to": "SALARIO", "value": 1}, {"from": "POBREZA RURAL", "to": "VIDA COTIDIANA", "value": 1}, {"from": "POBREZA RURAL", "to": "INGRESOS FAMILIARES", "value": 2}, {"from": "POBREZA RURAL", "to": "CONDICIONES DE TRABAJO", "value": 1}, {"from": "POBREZA RURAL", "to": "ESTRATEGIA DE DESARROLLO", "value": 1}, {"from": "POBREZA RURAL", "to": "POBREZA URBANA", "value": 1}, {"from": "POBREZA RURAL", "to": "CALIDAD DE LA VIDA", "value": 1}, {"from": "POBREZA RURAL", "to": "HAMBRE", "value": 1}, {"from": "POBREZA RURAL", "to": "EXCLUSI\u00d3N SOCIAL", "value": 1}, {"from": "POBREZA URBANA", "to": "MERCADO DE TRABAJO", "value": 1}, {"from": "POBREZA URBANA", "to": "EXCLUSI\u00d3N SOCIAL", "value": 1}, {"from": "POBREZA URBANA", "to": "CALIDAD DE LA VIDA", "value": 2}, {"from": "POBREZA URBANA", "to": "VIDA COTIDIANA", "value": 1}, {"from": "COSTE DE LA VIDA", "to": "SALARIO", "value": 1}, {"from": "SALARIO", "to": "SALARIO M\u00cdNIMO", "value": 1}, {"from": "SALARIO M\u00cdNIMO", "to": "COSTO DE LA VIDA", "value": 1}, {"from": "COSTE DE LA VIDA", "to": "SALARIO M\u00cdNIMO", "value": 1}, {"from": "SALARIO", "to": "COSTO DE LA VIDA", "value": 1}, {"from": "NIVEL DE VIDA", "to": "INGRESOS", "value": 1}, {"from": "NIVEL DE VIDA", "to": "CONDICIONES DE VIDA", "value": 1}, {"from": "NIVEL DE VIDA", "to": "SALARIO", "value": 1}, {"from": "NIVEL DE VIDA", "to": "ESTILO DE VIDA", "value": 2}, {"from": "NIVEL DE VIDA", "to": "PA\u00cdS EN DESARROLLO", "value": 1}, {"from": "NIVEL DE VIDA", "to": "CALIDAD DE LA VIDA", "value": 1}, {"from": "NIVEL DE VIDA", "to": "VIDA COTIDIANA", "value": 1}, {"from": "VIDA COTIDIANA", "to": "ESTILO DE VIDA", "value": 1}, {"from": "DISTRIBUCI\u00d3N DEL INGRESO", "to": "INGRESOS", "value": 3}, {"from": "DISTRIBUCI\u00d3N DEL INGRESO", "to": "RIQUEZA", "value": 1}, {"from": "DISTRIBUCI\u00d3N DEL INGRESO", "to": "SALARIO M\u00cdNIMO", "value": 3}, {"from": "DISTRIBUCI\u00d3N DEL INGRESO", "to": "SALARIO", "value": 5}, {"from": "INGRESOS", "to": "CONDICIONES SOCIALES", "value": 4}, {"from": "DISTRIBUCI\u00d3N DEL INGRESO", "to": "CONDICIONES SOCIALES", "value": 1}, {"from": "SALARIO", "to": "MERCADO DE TRABAJO", "value": 10}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "TRABAJO", "value": 2}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "DERECHO A LA EDUCACION", "value": 1}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "VIDA COTIDIANA", "value": 1}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "TRABAJO DE MENORES", "value": 1}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "CONDICIONES DE VIDA", "value": 1}, {"from": "EXCLUSI\u00d3N SOCIAL", "to": "DESARROLLO SOCIAL", "value": 1}, {"from": "HAMBRE", "to": "RIQUEZA", "value": 1}, {"from": "HAMBRE", "to": "TRABAJO DE MENORES", "value": 1}, {"from": "HAMBRE", "to": "POBRE", "value": 1}, {"from": "RIQUEZA", "to": "INGRESOS", "value": 4}, {"from": "PERSONAS SIN HOGAR", "to": "CALIDAD DE LA VIDA", "value": 1}, {"from": "PERSONAS SIN HOGAR", "to": "VIDA COTIDIANA", "value": 1}, {"from": "PERSONAS SIN HOGAR", "to": "CONDICIONES SOCIALES", "value": 2}, {"from": "ALIVIO DE LA POBREZA", "to": "PA\u00cdS EN DESARROLLO", "value": 1}, {"from": "NECESIDADES BASICAS", "to": "ESTILO DE VIDA", "value": 1}, {"from": "NECESIDADES BASICAS", "to": "ESTRATEGIA DE DESARROLLO", "value": 1}, {"from": "CALIDAD DE LA VIDA", "to": "CONDICIONES DE VIDA", "value": 7}, {"from": "ESTRATEGIA DE DESARROLLO", "to": "CALIDAD DE LA VIDA", "value": 1}, {"from": "VIDA COTIDIANA", "to": "TRABAJO", "value": 5}, {"from": "ESTILO DE VIDA", "to": "CONDICIONES SOCIALES", "value": 4}, {"from": "ESTILO DE VIDA", "to": "CALIDAD DE LA VIDA", "value": 35}, {"from": "ESTILO DE VIDA", "to": "CONDICIONES DE VIDA", "value": 2}, {"from": "ESTILO DE VIDA", "to": "TRABAJO", "value": 3}, {"from": "ESTILO DE VIDA", "to": "CONDICIONES DE TRABAJO", "value": 3}, {"from": "CALIDAD DE LA VIDA", "to": "CONDICIONES SOCIALES", "value": 9}, {"from": "ESTILO DE VIDA", "to": "PODER DE COMPRA", "value": 1}, {"from": "CONDICIONES DE TRABAJO", "to": "CONDICIONES SOCIALES", "value": 4}, {"from": "ESTILO DE VIDA", "to": "INGRESOS", "value": 1}, {"from": "CONDICIONES DE VIDA", "to": "CONDICIONES SOCIALES", "value": 4}, {"from": "SALARIO", "to": "INGRESOS", "value": 5}, {"from": "SALARIO", "to": "TRABAJO", "value": 9}, {"from": "SALARIO", "to": "BENEFICIOS COMPLEMENTARIOS", "value": 1}, {"from": "SALARIO", "to": "POL\u00cdTICA SALARIAL", "value": 2}, {"from": "POL\u00cdTICA SALARIAL", "to": "INCENTIVOS SALARIALES", "value": 1}, {"from": "SALARIO", "to": "INCENTIVOS SALARIALES", "value": 2}, {"from": "TRABAJO", "to": "MERCADO DE TRABAJO", "value": 17}, {"from": "SALARIO", "to": "DERECHO A LA EDUCACION", "value": 1}, {"from": "SALARIO", "to": "CONDICIONES DE EMPLEO", "value": 1}, {"from": "SALARIO", "to": "CONDICIONES DE TRABAJO", "value": 1}, {"from": "SALARIO", "to": "MANO DE OBRA", "value": 1}, {"from": "SALARIO M\u00cdNIMO", "to": "MERCADO DE TRABAJO", "value": 3}, {"from": "CONDICIONES DE EMPLEO", "to": "CONDICIONES DE TRABAJO", "value": 1}, {"from": "CONDICIONES DE EMPLEO", "to": "MERCADO DE TRABAJO", "value": 1}, {"from": "INGRESOS FAMILIARES", "to": "CONDICIONES ECONOMICAS", "value": 2}, {"from": "TRABAJO", "to": "INGRESOS", "value": 8}, {"from": "TRABAJO", "to": "DERECHO LABORAL", "value": 9}, {"from": "TRABAJO", "to": "CALIDAD DE LA VIDA", "value": 22}, {"from": "TRABAJO", "to": "DESARROLLO SOCIAL", "value": 1}, {"from": "TRABAJO", "to": "CONDICIONES DE TRABAJO", "value": 20}, {"from": "TRABAJO", "to": "CONDICIONES DE VIDA", "value": 3}, {"from": "TRABAJO", "to": "MANO DE OBRA", "value": 1}, {"from": "TRABAJO", "to": "TRABAJO DE MENORES", "value": 2}, {"from": "TRABAJO", "to": "PA\u00cdS EN DESARROLLO", "value": 1}, {"from": "INGRESOS", "to": "CONDICIONES DE TRABAJO", "value": 1}, {"from": "TRABAJO", "to": "CONDICIONES SOCIALES", "value": 1}, {"from": "CALIDAD DE LA VIDA", "to": "CONDICIONES DE TRABAJO", "value": 15}, {"from": "DERECHO LABORAL", "to": "MERCADO DE TRABAJO", "value": 1}, {"from": "MANO DE OBRA", "to": "CONDICIONES DE TRABAJO", "value": 1}, {"from": "MERCADO DE TRABAJO", "to": "CONDICIONES DE TRABAJO", "value": 3}, {"from": "MERCADO DE TRABAJO", "to": "CALIDAD DE LA VIDA", "value": 1}, {"from": "MERCADO DE TRABAJO", "to": "CONDICIONES DE VIDA", "value": 2}, {"from": "MERCADO DE TRABAJO", "to": "PA\u00cdS EN DESARROLLO", "value": 1}, {"from": "MERCADO DE TRABAJO", "to": "TRABAJO FORZOSO", "value": 1}, {"from": "TRABAJO DE MENORES", "to": "TRABAJO FORZOSO", "value": 1}, {"from": "TRABAJO DE MENORES", "to": "CONDICIONES DE TRABAJO", "value": 1}, {"from": "DESARROLLO SOCIAL", "to": "CALIDAD DE LA VIDA", "value": 1}, {"from": "CALIDAD DE LA VIDA", "to": "INGRESOS", "value": 3}, {"from": "CALIDAD DE LA VIDA", "to": "PA\u00cdS EN DESARROLLO", "value": 1}, {"from": "CALIDAD DE LA VIDA", "to": "CONDICIONES ECONOMICAS", "value": 1}, {"from": "INGRESOS", "to": "CONDICIONES DE VIDA", "value": 4}, {"from": "INGRESOS", "to": "PRESUPUESTO FAMILIAR", "value": 1}, {"from": "CONDICIONES DE VIDA", "to": "CONDICIONES DE TRABAJO", "value": 3}]);

        // adding nodes and edges to the graph
        data = { nodes: nodes, edges: edges };

        var options = {
            "configure": {
                "enabled": false
            },
            "edges": {
                "color": {
                    "inherit": true
                },
                "smooth": {
                    "enabled": false,
                    "type": "continuous"
                }
            },
            "interaction": {
                "dragNodes": true,
                "hideEdgesOnDrag": false,
                "hideNodesOnDrag": false
            },
            "physics": {
                "enabled": true,
                "forceAtlas2Based": {
                    "avoidOverlap": 0,
                    "centralGravity": 0.01,
                    "damping": 0.4,
                    "gravitationalConstant": -50,
                    "springConstant": 0.08,
                    "springLength": 100
                },
                "solver": "forceAtlas2Based",
                "stabilization": {
                    "enabled": true,
                    "fit": true,
                    "iterations": 1000,
                    "onlyDynamicEdges": false,
                    "updateInterval": 50
                }
            }
        };





        network = new vis.Network(container, data, options);





        network.on("stabilizationProgress", function (params) {
            document.getElementById('loadingBar').removeAttribute("style");
            var maxWidth = 496;
            var minWidth = 20;
            var widthFactor = params.iterations / params.total;
            var width = Math.max(minWidth, maxWidth * widthFactor);

            document.getElementById('bar').style.width = width + 'px';
            document.getElementById('text').innerHTML = Math.round(widthFactor * 100) + '%';
        });
        network.once("stabilizationIterationsDone", function () {
            document.getElementById('text').innerHTML = '100%';
            document.getElementById('bar').style.width = '496px';
            document.getElementById('loadingBar').style.opacity = 0;
            // really clean the dom element
            setTimeout(function () { document.getElementById('loadingBar').style.display = 'none'; }, 500);
        });


        return network;

    }

    drawGraph();

    network.on("click", function (params) {
        var cargando = document.getElementById('charger');
        cargando.style.display = "block";
        // console.log('prueba');
        document.getElementById("datosArticulo").innerHTML = "";
        document.getElementById("contenedorArticulos").style.display = "none";
        params.event = "[original event]";
        // console.log(params.nodes)
        document.getElementById("datosArticulo").innerHTML = 'Artículos para <span style="font-family: Barlow-Bold">' + params.nodes + '</span>';
        let palabra = normalize(params.nodes.toString());
        $.ajax({
            url: `http://portal.amelica.org/ApiReaderIndex/resources/articulos/climatico2/palabras/${palabra}/1/10/relevancia/0/{"anios":"","idiomas":"", "paises":"","areas":"","disciplinas":"","autores":"","instituciones":"","origen":"","funete":"","fb":1}`,
            success: function (result) {
                let titleArticle = '';
                // console.log('datos de articulos home', result);
                var articulosConcepto = result.resultados;
                // console.log(articulosConcepto);
                // console.log(Object.keys(articulosConcepto).length);
                tamano = Object.keys(articulosConcepto).length;
                for (let index = 0; index < tamano; index++) {
                    const element = articulosConcepto[index];
                    const titlesArticle = element.tituloArticulo.split('<<<');
                    // console.log(titlesArticle);
                    if(titlesArticle.length === 1){
                        titleArticle = titlesArticle[0];
                    }else{
                        titleArticle = titlesArticle[1];
                    }
                    
                    var item = document.createElement('a');
                    item.setAttribute("href", 'https://redalyc.org/articulo.oa?id=' + element.cveArticulo);
                    item.setAttribute("target", "_blank");
                    item.setAttribute("style", "text-decoration: none");
                    item.innerHTML = '<div class="card-article" style="box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%); transition: 0.3s; width: 90%; border-radius: 5px; margin: 5px; padding: 5px; color: black;"><span class="text-link" style="font-family: Barlow-Bold; font-size: 10pt; color: #1a1a1a;">' + titleArticle + '</span><br><span class="text-revista" style="font-family: Barlow-Regular; font-size: 10pt; color: #37464e;">' + element.nombreRevista + ', ' + element.anio + ' ' + element.numero + '(' + element.volumen + ')</span></div>';
                    document.getElementById('datosArticulo').appendChild(item);
                }
                cargando.style.display = "none";
                document.getElementById("contenedorArticulos").style.display = "block";
                // var articulos = document.getElementById("container-articles");
                // articulos.setAttribute("style", "height: 100%;");
                var itemBoton = document.createElement('div');
                itemBoton.setAttribute("style", "margin: 20px auto; border-radius: 5px; padding: 10px; background: #e5243b;      text-align: center; width: 50%;");
                itemBoton.innerHTML = `<a style="text-decoration: none; color: white;" href="${urlProject}#/busqueda-palabra-clave/${params.nodes}"> <div id="btn-mas-articulos">Más artículos</div></a>`;
                document.getElementById('datosArticulo').appendChild(itemBoton);
            },
            error: function (error) {
                console.log('no hay resultados', error);
            }
        });

    });
}

var normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
        to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};
   
    for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );
   
    return function( str ) {
        var ret = [];
        for( var i = 0, j = str.length; i < j; i++ ) {
            var c = str.charAt( i );
            if( mapping.hasOwnProperty( str.charAt( i ) ) )
                ret.push( mapping[ c ] );
            else
                ret.push( c );
        }      
        return ret.join( '' );
    }
   
  })();
cargarRed();