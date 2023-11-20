
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CRow,
  CWidgetStatsB,
  CWidgetStatsE,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import WidgetsBrand from './WidgetsBrand';
import WidgetsDropdown from './WidgetsDropdown';
import { CChartBar } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';

const Widgets: React.FC = () => {
  const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <CCard className="mb-4">
      <CCardHeader>Widgets</CCardHeader>
      <CCardBody>
        <DocsExample href="/components/widgets/#cwidgetstatsa">
          <WidgetsDropdown />
        </DocsExample>
        <DocsExample href="/components/widgets/#cwidgetstatsb">
          <CRow>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsB
                className="mb-4"
                progress={{ color: 'success', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
                title="Widget title"
                value="89.9%"
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsB
                className="mb-4"
                value="12.124"
                title="Widget title"
                progress={{ color: 'info', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsB
                className="mb-4"
                value="$98.111,00"
                title="Widget title"
                progress={{ color: 'warning', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsB
                className="mb-4"
                value="2 TB"
                title="Widget title"
                progress={{ color: 'primary', value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
          </CRow>
        </DocsExample>
        <DocsExample href="/components/widgets/#cwidgetstatsb">
          <CRow>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsB
                className="mb-4"
                color="success"
                inverse
                value="89.9%"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsB
                className="mb-4"
                color="info"
                inverse
                value="12.124"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsB
                className="mb-4"
                color="warning"
                inverse
                value="$98.111,00"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsB
                className="mb-4"
                color="primary"
                inverse
                value="2 TB"
                title="Widget title"
                progress={{ value: 89.9 }}
                text="Lorem ipsum dolor sit amet enim."
              />
            </CCol>
          </CRow>
        </DocsExample>
        <DocsExample href="/components/widgets/#cwidgetstatse">
          <CRow>
            <CCol sm={4} lg={2}>
              <CWidgetStatsE
                chart={
                  <CChartBar
                    className="mx-auto"
                    style={{ height: '40px', width: '80px' }}
                    data={{
                      labels: [
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S',
                        'S',
                        'M',
                      ],

                      datasets: [
                        {
                          backgroundColor: getStyle('--info'),
                          borderColor: 'rgba(255,255,255,.55)',
                          data: Array.from({ length: 15 }, () => random(80, 100)),
                          label: 'Dataset',
                        },
                      ],
                    }}
                    options={{
                      tooltips: {
                        enabled: false,
                        custom: false,
                      },
                      maintainAspectRatio: false,
                      legend: {
                        display: false,
                      },
                      scales: {
                        xAxes: [
                          {
                            gridLines: {
                              color: 'transparent',
                              zeroLineColor: 'transparent',
                            },
                            ticks: {
                              fontSize: 2,
                              fontColor: 'transparent',
                            },
                          },
                        ],
                        yAxes: [
                          {
                            display: false,
                            ticks: {
                              display: false,
                              min: Math.min.apply(Math, Array.from({ length: 15 }, () => random(80, 100))) - 5,
                              max: Math.max.apply(Math, Array.from({ length: 15 }, () => random(80, 100))) + 5,
                            },
                          },
                        ],
                      },
                    }}
                  />
                }
              />
            </CCol>
          </CRow>
        </DocsExample>
      </CCardBody>
    </CCard>
  );
};

export default Widgets;
