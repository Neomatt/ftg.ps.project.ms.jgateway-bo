import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

// import { AnalyticsDashboardService } from 'app/main/apps/dashboards/analytics/analytics.service';

@Component({
    selector     : 'home-animateur',
    templateUrl  : './home.component.html',
    styleUrls    : ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class HomeAnimateurComponent implements OnInit
{
    // widgets: any;
    // widget1SelectedYear = '2016';
    // widget5SelectedDay = 'today';

    /**
     * Constructor
     *
     * @param {AnalyticsDashboardService} _analyticsDashboardService
     */
    constructor(
       // private _analyticsDashboardService: AnalyticsDashboardService
    )
    {
        // Register the custom chart.js plugin
        // this._registerCustomChartJSPlugin();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the widgets from the service
        // this.widgets = this._analyticsDashboardService.widgets;
    }
}

