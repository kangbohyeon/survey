package com.servy.user.controller

import com.servy.user.DTO.SurveyListResponseVo
import com.servy.user.DTO.SurveyRequestDto
import com.servy.user.DTO.SurveyResponseVo
import com.servy.user.constants.ExceptionMessage.Companion.INSERT_SUCCESS
import com.servy.user.service.SurveyService
import org.springframework.data.domain.Pageable
import org.springframework.data.web.PageableDefault
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
class SurveyController(
    private val surveyService: SurveyService
) {

    @GetMapping("/surveys")
    fun getSurveys(@PageableDefault(page = 0, size = 10) pageable: Pageable): ResponseEntity<SurveyListResponseVo> {
        return ResponseEntity.ok().body(surveyService.getSurveys(pageable))
    }

    @GetMapping("/surveys/{surveyId}")
    fun getSurvey(@PathVariable("surveyId") surveyId: Int): ResponseEntity<SurveyResponseVo> {
        return ResponseEntity.ok().body(surveyService.getSurvey(surveyId))
    }

    @PostMapping("/surveys")
    fun insertSurvey(@RequestBody surveyRequestDto: SurveyRequestDto): ResponseEntity<String> {
        surveyService.save(surveyRequestDto)
        return ResponseEntity.status(HttpStatus.CREATED).body(INSERT_SUCCESS)
    }
}