package com.servy.user.controller

import com.servy.user.DTO.SurveyListResponseVo
import com.servy.user.service.SurveyService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.web.PageableDefault
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class SurveyController(
    private val surveyService: SurveyService
) {

    @GetMapping("/surveys")
    fun getSurveys(@PageableDefault(page=0, size=10) pageable: Pageable):ResponseEntity<Page<SurveyListResponseVo>> {
        return ResponseEntity.ok().body(surveyService.getSurveys(pageable))
    }
}