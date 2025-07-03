package com.servy.user.service

import com.servy.user.DTO.PageVo
import com.servy.user.DTO.SurveyListResponseVo
import com.servy.user.DTO.SurveyResponseVo
import com.servy.user.repository.SurveyRepository
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class SurveyServiceImpl(
    private val surveyRepository: SurveyRepository
) : SurveyService {
    override fun getSurveys(pageable: Pageable): SurveyListResponseVo {

        val surveys = surveyRepository.findAll(pageable)
        val pageVo = PageVo(
            first = surveys.isFirst,
            last = surveys.isLast,
            totalPages = surveys.totalPages,
            totalElements = surveys.totalElements,
            pageSize = surveys.size,
            pageNumber = surveys.pageable.pageNumber
        )

        val surveyResponseVos =
            surveys.content.map { survey -> SurveyResponseVo(id = survey.id, title = survey.title) }.toList()

        return SurveyListResponseVo(page = pageVo, content = surveyResponseVos)

    }

}